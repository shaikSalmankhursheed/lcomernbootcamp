var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "7c2bx647qgfhvvrt",
  publicKey: "3ccvtz54k3gn2gsw",
  privateKey: "9e73f0a7e6ad2ca7523f209d79974b11",
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate(
    {
      // customerId: aCustomerId,
    },
    function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }

      // var clientToken = response.clientToken;
    }
  );
};
exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;
  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true,
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
