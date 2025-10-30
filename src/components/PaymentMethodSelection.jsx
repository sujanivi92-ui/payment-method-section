import React from 'react';
import './PaymentMethodSelection.css';

const PaymentMethodSelection = ({ selectedMethod, onMethodChange }) => {
  const paymentMethods = [
    {
      id: 'cod',
      value: 'cash_on_delivery',
      label: 'Cash on Delivery',
      description: 'Pay when you receive your order',
      icon: '💰',
      details: 'No advance payment required'
    },
    {
      id: 'upi',
      value: 'upi',
      label: 'UPI Payment',
      description: 'Instant payment using UPI apps',
      icon: '📱',
      details: 'Google Pay, PhonePe, PayTM supported'
    },
    {
      id: 'card',
      value: 'debit_credit_card',
      label: 'Debit/Credit Card',
      description: 'Secure card payment',
      icon: '💳',
      details: 'Visa, MasterCard, RuPay accepted'
    }
  ];

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>Select Payment Method</h2>
        <p>Choose your preferred payment option</p>
      </div>
      
      <div className="payment-options">
        {paymentMethods.map((method) => (
          <div 
            key={method.id} 
            className={`payment-option ${selectedMethod === method.value ? 'selected' : ''}`}
            onClick={() => onMethodChange(method.value)}
          >
            <div className="option-header">
              <div className="radio-container">
                <input
                  type="radio"
                  id={method.id}
                  name="payment-method"
                  value={method.value}
                  checked={selectedMethod === method.value}
                  onChange={() => onMethodChange(method.value)}
                  className="payment-radio"
                />
                <span className="custom-radio"></span>
              </div>
              
              <div className="method-icon">
                <span className="icon">{method.icon}</span>
              </div>
              
              <div className="method-info">
                <label htmlFor={method.id} className="method-label">
                  {method.label}
                </label>
                <p className="method-description">{method.description}</p>
              </div>
            </div>
            
            <div className="method-details">
              <p>{method.details}</p>
            </div>
            
            {selectedMethod === method.value && (
              <div className="selected-indicator">
                <span>✓ Selected</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {selectedMethod && (
        <div className="selection-confirmation">
          <p>
            <strong>Selected Method:</strong> {
              paymentMethods.find(m => m.value === selectedMethod)?.label
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodSelection;