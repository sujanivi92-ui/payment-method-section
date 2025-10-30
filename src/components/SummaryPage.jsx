import React from 'react';
import './SummaryPage.css';

const SummaryPage = ({ selectedPaymentMethod, orderDetails }) => {
  const getMethodDisplayInfo = (method) => {
    const methods = {
      'cash_on_delivery': {
        label: 'Cash on Delivery',
        icon: '💰',
        description: 'Pay when your order arrives'
      },
      'upi': {
        label: 'UPI Payment',
        icon: '📱',
        description: 'Instant UPI transaction'
      },
      'debit_credit_card': {
        label: 'Debit/Credit Card',
        icon: '💳',
        description: 'Secure card payment'
      }
    };
    return methods[method] || { label: 'Not selected', icon: '❓', description: '' };
  };

  const methodInfo = getMethodDisplayInfo(selectedPaymentMethod);

  return (
    <div className="summary-container">
      <div className="summary-header">
        <h2>Order Summary</h2>
        <p>Review your order details and payment method</p>
      </div>
      
      <div className="summary-content">
        <div className="order-section">
          <h3>Order Details</h3>
          <div className="order-items">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="order-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="order-totals">
            <div className="total-line">
              <span>Subtotal:</span>
              <span>${orderDetails.subtotal}</span>
            </div>
            <div className="total-line">
              <span>Shipping:</span>
              <span>${orderDetails.shipping}</span>
            </div>
            <div className="total-line grand-total">
              <span>Total:</span>
              <span>${orderDetails.total}</span>
            </div>
          </div>
        </div>
        
        <div className="payment-section">
          <h3>Payment Information</h3>
          <div className="payment-method-display">
            <div className="method-summary">
              <div className="method-icon-large">
                <span>{methodInfo.icon}</span>
              </div>
              <div className="method-details-summary">
                <h4>{methodInfo.label}</h4>
                <p>{methodInfo.description}</p>
              </div>
            </div>
            
            {selectedPaymentMethod === 'upi' && (
              <div className="payment-instructions">
                <p>You will be redirected to your UPI app for payment</p>
              </div>
            )}
            
            {selectedPaymentMethod === 'debit_credit_card' && (
              <div className="payment-instructions">
                <p>You will be redirected to secure payment gateway</p>
              </div>
            )}
            
            {selectedPaymentMethod === 'cash_on_delivery' && (
              <div className="payment-instructions">
                <p>Please keep exact change ready for the delivery executive</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="delivery-section">
          <h3>Delivery Information</h3>
          <div className="delivery-details">
            <p><strong>Address:</strong> {orderDetails.shippingAddress}</p>
            <p><strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}</p>
          </div>
        </div>
      </div>
      
      <div className="summary-actions">
        <button className="confirm-order-btn">
          Confirm & Place Order
        </button>
        <button className="edit-order-btn">
          Edit Payment Method
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;