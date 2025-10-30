import React, { useState } from 'react';
import PaymentMethodSelection from './components/PaymentMethodSelection';
import SummaryPage from './components/SummaryPage';
import './App.css';

function App() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [currentStep, setCurrentStep] = useState('payment'); // 'payment' or 'summary'

  // Sample order details
  const orderDetails = {
    items: [
      { name: 'Wireless Bluetooth Headphones', price: 79.99 },
      { name: 'Phone Case', price: 15.99 },
      { name: 'Screen Protector', price: 9.99 }
    ],
    subtotal: 105.97,
    shipping: 5.99,
    total: 111.96,
    shippingAddress: '123 Main Street, Apt 4B, New York, NY 10001',
    estimatedDelivery: '2-3 business days'
  };

  const handleMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleContinueToSummary = () => {
    if (selectedPaymentMethod) {
      setCurrentStep('summary');
    } else {
      alert('Please select a payment method to continue.');
    }
  };

  const handleBackToPayment = () => {
    setCurrentStep('payment');
  };

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1>🛒 Checkout Process</h1>
          <div className="step-indicator">
            <div className={`step ${currentStep === 'payment' ? 'active' : 'completed'}`}>
              <span className="step-number">1</span>
              <span className="step-label">Payment Method</span>
            </div>
            <div className="step-connector"></div>
            <div className={`step ${currentStep === 'summary' ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Order Summary</span>
            </div>
          </div>
        </header>

        <main className="app-main">
          {currentStep === 'payment' && (
            <div className="step-content">
              <PaymentMethodSelection
                selectedMethod={selectedPaymentMethod}
                onMethodChange={handleMethodChange}
              />
              <div className="navigation-buttons">
                <button
                  className="continue-btn"
                  onClick={handleContinueToSummary}
                  disabled={!selectedPaymentMethod}
                >
                  Continue to Summary →
                </button>
              </div>
            </div>
          )}

          {currentStep === 'summary' && (
            <div className="step-content">
              <SummaryPage
                selectedPaymentMethod={selectedPaymentMethod}
                orderDetails={orderDetails}
              />
              <div className="navigation-buttons">
                <button
                  className="back-btn"
                  onClick={handleBackToPayment}
                >
                  ← Back to Payment
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="app-footer">
          <p>Secure & Encrypted Payment Process</p>
        </footer>
      </div>
    </div>
  );
}

export default App;