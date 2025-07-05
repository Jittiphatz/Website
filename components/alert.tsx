import { Alert } from "@heroui/alert";

export function MyAlert() {
  return (
    <div className="w-full max-w-none md:max-w-4xl mx-auto p-4">
      <Alert
        className="w-full"
        color="success"
        title="This website is under development"
      />
    </div>
  );
}

// ใส่ตอนกำลังทำเว็บนี้อยู่จ้ะ