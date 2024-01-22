// react icons imports
import { RiInformationLine } from "react-icons/ri";

export default function Profile() {
  return (
    <div>
      <p className="inline-block">
        Public key
        <div
          title="people with this key can see your data entries"
          className="pl-1 inline-block"
        >
          <RiInformationLine className="text-gray-500 hover:text-black"/>
        </div>
      </p>
    </div>
  );
}
