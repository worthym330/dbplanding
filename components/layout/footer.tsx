export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Premium hotel booking platform for marathon runners seeking post-race
              relaxation and recovery.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Hotels</li>
              <li>Packages</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: support@spikereach.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Marathon St, NY 10001</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 SpikeReach. All rights reserved.
        </div>
      </div>
    </footer>
  );
}