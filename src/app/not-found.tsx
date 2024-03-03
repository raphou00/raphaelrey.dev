import { redirect } from "@/libs/navigation";

export const dynamic = "force-dynamic";

const NotFound = async () => {
    redirect("/");
}

export default NotFound;