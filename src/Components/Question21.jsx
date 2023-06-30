/**
 * Code-Splitting Bundling,
 * Bundling is the process of follwing the imported files and merging them into a
 * single file.
 * 
 */

const Question21 = () => {
    const add = () => {
        import('../helpers/math')
            .then(math => {
                const sum = math.add(3, 33);
                console.log("Reuslt of the addition:", sum);
            })
    }
    return (
        <div>
            <h3>Code-Splitting Example</h3>
            <p>Add Two numbers, 3 and 33 (will log the output in the console.)</p>
            <button onClick={add}>add</button>
        </div>
    )
}

export default Question21;