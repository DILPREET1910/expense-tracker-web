export default function Add() {
  return(
    <div className="border-black border-4 rounded-xl p-12">
      <form>
        <div className="flex flex-row">
          <h1>date picker</h1>
          <h1 className="ml-auto">category picker</h1>
        </div>

        <div className="pt-8">
          <label className="block ml-1">Amount*</label>
          <input required  name="amount" 
            className="border-2 border-black rounded-lg p-0.5 pl-1 w-full" 
            placeholder="100₹" type="number"/>
        </div>

        <div className="pt-4">
          <label className="block ml-1">Description</label>
          <input name="description" 
            className="border-2 border-black rounded-lg p-0.5 pl-1 w-full" 
            placeholder="description if any" type="text"/>
        </div>

        <div className="pt-8">
          <button type="submit" className="bg-gray-700 text-white shadow hover:bg-gray-900 rounded-lg w-full p-1">Add</button>
        </div>
      </form>
    </div>
  );
}
