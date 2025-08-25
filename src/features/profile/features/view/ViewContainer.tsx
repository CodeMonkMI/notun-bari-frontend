import { Adoptions } from "./components/adoptions";
import { Payments } from "./components/payments";
import { Pets } from "./components/pets";
import { Profile } from "./components/profile";

export function ViewContainer() {
  return (
    <div className="font-sans text-gray-800">
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Profile />

        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          <Payments />

          <Adoptions />

          <Pets />
        </div>
      </div>
    </div>
  );
}
