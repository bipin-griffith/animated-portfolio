import React from "react";
import { motion } from "framer-motion";
import "./ErrorPage.scss";

function ErrorPage() {
  let title = "An error occurred !!";
  let message = "Something went wrong";

  return (
    <motion.div
      className="error-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="error-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="error-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {message}
      </motion.p>
      {error.status && (
        <motion.div
          className="error-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p>
            <strong>Status Code:</strong> {error.status}
          </p>
          {error.data?.details && (
            <p>
              <strong>Details:</strong> {error.data.details}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default ErrorPage;
