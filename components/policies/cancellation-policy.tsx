const CancellationPolicy = () => {
  return (
    <div className="">
      <main className="text-justify">
        <section className="text-justify">
          <p className="mb-2">
            <strong>Last Updated:</strong> January 8, 2025
          </p>
          <p>
            We understand the importance of planning, and our cancellation policy reflects that:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              <strong>Non-Cancellable Bookings:</strong> Once a booking is made, it cannot be canceled or refunded. Please ensure your plans are final before making a booking.
            </li>
          </ul>
          <p>
            If you have any questions or concerns, feel free to reach out to our support team at{" "}
            <a href="mailto:team@daybreakpass.com" className="text-primary hover:underline">
              team@daybreakpass.com
            </a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CancellationPolicy;
