import clippyImage from "@assets/IMG_5016_1762430441740.jpeg";

export default function TokenHeader() {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center p-6">
        <img 
          src={clippyImage} 
          alt="Clippy mascot" 
          className="w-32 h-24 object-cover rounded-xl"
          data-testid="img-clippy-mascot"
        />
      </div>
    </div>
  );
}
