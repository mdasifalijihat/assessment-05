function updateDayAndDate() {
    const now = new Date();
    const dayOptions = { weekday: "long" };
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const dayString = now.toLocaleDateString("en-US", dayOptions);
    const dateString = now.toLocaleDateString("en-US", dateOptions);
    document.getElementById("day").innerText = dayString;
    document.getElementById("date").innerText = dateString;
  }

  updateDayAndDate();

    // discover blogs
    document.getElementById("discover-blog").addEventListener("click", function () {
        window.location.href = "assessment-05/blog.html";
      });