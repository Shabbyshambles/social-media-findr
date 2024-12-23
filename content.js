document.addEventListener("mouseup", (event) => {
    const selection = window.getSelection();
    console.log("here");
    console.log(selection.toString());
    // Check if a valid selection exists
    if (selection && selection.toString().trim().length > 0) {
        console.log("yeah");
      // Create a tooltip only if the selection has valid text
      const tooltip = document.createElement("div");
      tooltip.id = "socialFinderTooltip";
      tooltip.textContent = "Searching for social media...";
      tooltip.style.position = "absolute";
      tooltip.style.background = "#fff";
      tooltip.style.border = "1px solid #ccc";
      tooltip.style.padding = "5px";
      tooltip.style.zIndex = "1000";
      tooltip.style.top = `${event.pageY + 10}px`;
      tooltip.style.left = `${event.pageX + 10}px`;
      document.body.appendChild(tooltip);
  
      // Simulate a result
      setTimeout(() => {
        tooltip.textContent = "Profiles found: Twitter, LinkedIn";
      }, 2000);
    }
    else{
        console.log("oops");
    }
  });
  
  document.addEventListener("mouseout", () => {
    // Remove the tooltip on mouse out
    const tooltip = document.getElementById("socialFinderTooltip");
    if (tooltip) tooltip.remove();
  });
  