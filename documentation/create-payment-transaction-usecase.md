# Create payment transaction

## Actors

- Customer
- Payment Processor

## Description

The Create Payment Transaction use case involves the process of a customer initiating a payment transaction with a payment processor. The payment processor verifies the customer's account details and initiates the transfer of funds from the customer's account to the recipient's account.

## Preconditions

1. The customer has an account with the payment processor.
2. The customer has sufficient funds in their account to cover the payment.
3. The recipient has an account with the payment processor or with another financial.
4. institution that is supported by the payment processor.

## Postconditions

- The payment transaction has been successfully initiated.
- The recipient has received the payment.

## Flow of Events

1. The customer initiates the payment transaction by providing the necessary information to the payment processor, including the recipient's account details and the amount to be transferred.
2. The payment processor verifies the customer's account details and confirms that the customer has sufficient funds to cover the payment.
3. If the customer's account details are invalid or if they do not have sufficient funds, the payment processor will reject the transaction and notify the customer.
4. If the customer's account details are valid and they have sufficient funds, the payment processor will initiate the transfer of funds to the recipient's account.
5. The payment processor will monitor the status of the transaction and update the customer on its progress.
6. The payment processor will update the status of the transaction as follows:

   a. Pending: The transaction has been initiated but has not yet been processed.

   b. In progress: The transaction is currently being processed.

   c. Completed: The transaction has been successfully completed.

   d. Failed: The transaction has failed due to an error or other issue.

7. Once the payment has been successfully transferred to the recipient's account, the payment processor will update the status of the transaction to "Completed".

## Alternate Flows

1a. Invalid account details: If the customer provides invalid account details for the recipient, the payment processor will reject the transaction and notify the customer.

2a. Insufficient funds: If the customer does not have sufficient funds in their account to cover the payment, the payment processor will reject the transaction and notify the customer.

4a. Payment processor error: If the payment processor encounters an error while processing the transaction, it will update the status of the transaction to "Failed" and notify the customer.

## Exception Flows

1e. Customer cancels transaction: If the customer cancels the payment transaction before it has been completed, the payment processor will update the status of the transaction to "Cancelled" and no funds will be transferred.

6e. Transaction times out: If the payment processor is unable to complete the transaction within a certain timeframe, it will update the status of the transaction to "Timed Out" and no funds will be transferred.
