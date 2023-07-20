import ShareIcon from "./icons/ShareIcon";
import StorageIcon from "./icons/StorageIcon";

function SidebarDashboard() {
  return (
    <div className=" w-1/6 bg-white p-3 rounded-lg flex flex-col gap-3">
      <div className="px-4 py-2 rounded-3xl bg-green-200 border border-green-700 flex gap-4">
        <StorageIcon/>
        <div>My Storage</div>
      </div>
      <div className="px-4 py-2 rounded-3xl  flex gap-4 hover:bg-green-200 duration-200 transition ease-in-out cursor-pointer">
        <ShareIcon/>
        <div>Shared with me</div>
      </div>
    </div>
  )
}
export default SidebarDashboard