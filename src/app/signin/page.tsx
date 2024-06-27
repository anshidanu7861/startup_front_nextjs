import Link from "next/link";
import SigninForm from "@/components/auth/signinFrom";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Signin() {
  return (
    <div>
      <GoogleOAuthProvider clientId="565435053802-igdbdm16j4q6d29sfuhu5fm88ujkvahu.apps.googleusercontent.com">
        <SigninForm />
      </GoogleOAuthProvider>
    </div>
  );
}
