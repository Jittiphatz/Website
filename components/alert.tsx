import { Alert } from "@heroui/alert";

export function MyAlert() {
  return (
    <div className="w-full max-w-none md:max-w-4xl mx-auto p-4">
      <Alert
        className="w-full"
        color="warning"
        title="This website is under development"
      />
    </div>
  );
}

// Alternative approaches:

// Option 1: Using CSS classes for responsive behavior

// Option 2: Using container with specific breakpoints
