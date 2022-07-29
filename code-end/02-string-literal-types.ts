function assertNever(value: never) {
    throw new Error("unexpected")
}

function withAlignment(alignment: "right" | "left" | "center" | "start" | undefined | null) {
    if (!alignment) {
        return;
    }
    switch (alignment) {
        case "center" : break;
        case "left" : break;
        case "right" : break;
        case "start" : break;
        default:
            assertNever(alignment);
    }
}

withAlignment("central")
withAlignment("center")
withAlignment("left")
withAlignment("right")
withAlignment("start")
withAlignment("end")

