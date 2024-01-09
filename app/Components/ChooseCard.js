
const ChooseCard = (item) => {
 
  return (
    <div className="w-[320px] p-4">
        <p className="font-semibold">{item.item.title}</p>
        <p className="text-gray-300">{item.item.content}</p>
    </div>
  )
}

export default ChooseCard