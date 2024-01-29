export default function SharedWithYou() {
  return (
    <div>
      <p className="inline-block text-xl font-bold">Add public key</p>
      <div>
        <input
          type="text"
          name="public_key"
          className="p-0.5 border-2 border-gray-900 rounded-lg"
          placeholder="enter public key"
        />
        <button
          type="submit"
          className="ml-2 bg-gray-700 hover:bg-gray-900 rounded-lg p-1 text-white shadow"
        >
          add
        </button>
      </div>
    </div>
  );
}
