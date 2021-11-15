import { useEffect, useReducer, useRef } from 'react'
import { noop } from 'lodash'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import {toast} from "react-toastify"
import useActiveWeb3React from './useActiveWeb3React'

const initialState = {
  approvalState: 'idle',
  confirmState: 'idle',
}

const reducer = (state, actions) => {
  switch (actions.type) {
    case 'initial_state':
      return {
        ...state,
        approvalState: 'idle',
        confirmState: 'idle',
      }
    case 'requires_approval':
      return {
        ...state,
        approvalState: 'success',
      }
    case 'approve_sending':
      return {
        ...state,
        approvalState: 'loading',
      }
    case 'approve_receipt':
      return {
        ...state,
        approvalState: 'success',
      }
    case 'approve_error':
      return {
        ...state,
        approvalState: 'fail',
      }
    case 'confirm_sending':
      return {
        ...state,
        confirmState: 'loading',
      }
    case 'confirm_receipt':
      return {
        ...state,
        confirmState: 'success',
      }
    case 'confirm_error':
      return {
        ...state,
        confirmState: 'fail',
      }
    default:
      return state
  }
}

const useMultiApproveConfirmTransaction = ({
  onApprove,
  onConfirm,
  onRequiresApproval,
  onSuccess = noop,
  onApproveSuccess = noop,
}) => {
  const { account } = useActiveWeb3React()
  const [state, dispatch] = useReducer(reducer, initialState)
  const handlePreApprove = useRef(onRequiresApproval)
  // Check if approval is necessary, re-check if account changes
  useEffect(() => {
    if (account && handlePreApprove.current) {
      handlePreApprove.current().then((result) => {
        if (result) {
          dispatch({ type: 'requires_approval' })
        }
      })
    }
  }, [account, handlePreApprove, dispatch])

  return {
    isApproving: state.approvalState === 'loading',
    isApproved: state.approvalState === 'success',
    isConfirming: state.confirmState === 'loading',
    isConfirmed: state.confirmState === 'success',
    hasApproveFailed: state.approvalState === 'fail',
    hasConfirmFailed: state.confirmState === 'fail',
    handleApprove: async () => {
      try {
        const txs = await onApprove()
        dispatch({ type: 'approve_sending' })
        let receipts  = []
        for (const tx of txs) {
          receipts.push(await tx.wait())
        }
        let status = true;
        for (const receipt of receipts){
          if (!receipt.status) {
            status = false;
            break;
          }
        }
        if (status){
          dispatch({ type: 'approve_receipt' })
          onApproveSuccess({ state, receipts })
        }
      } catch (error) {
        console.log(error)
        dispatch({ type: 'approve_error' })
        toast.error('Please try again. Confirm the transaction and make sure you are paying enough gas!')
      }
    },
    handleConfirm: async (params = {}) => {
      dispatch({ type: 'confirm_sending' })
      try {
        const tx = await onConfirm(params)
        const receipt = await tx.wait()
        if (receipt.status) {
          dispatch({ type: 'confirm_receipt' })
          onSuccess({ state, receipt })
        }
      } catch (error) {
        dispatch({ type: 'confirm_error' })
        toast.error('Please try again. Confirm the transaction and make sure you are paying enough gas!')
      }
    },
    handleReload: async (params = {}) => {
      dispatch( {type: 'initial_state' })
      if (account && handlePreApprove.current) {
        handlePreApprove.current().then((result) => {
          if (result) {
            dispatch({ type: 'requires_approval' })
          }
        })
      }
    },
  }
}

export default useMultiApproveConfirmTransaction