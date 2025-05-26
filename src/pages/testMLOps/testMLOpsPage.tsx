import { Button } from "@/components/ui/button";

export default function TestMLOpsPage() {
    const handleClick = () => {
        console.log("Click!");
        
    }
    return (
        <>
            <h1>Test MLOps</h1>
            <Button onClick={handleClick}>Retrain Model</Button>
        </>
    );
    
}