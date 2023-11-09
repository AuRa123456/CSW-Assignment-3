$(document).ready(function () {
    const jobs = [
      { title: 'Job 1', category: 'category1' },
      { title: 'Job 2', category: 'category2' },
      // Add more job data here
    ];
  
    const categoryFilter = $('#category');
    const jobList = $('.job-list');
  
    // Function to filter jobs by category
    function filterJobs() {
      const selectedCategory = categoryFilter.val();
      jobList.empty();
  
      jobs.forEach(function (job) {
        if (selectedCategory === 'all' || job.category === selectedCategory) {
          const jobElement = `<div class="job">${job.title} (${job.category})</div>`;
          jobList.append(jobElement);
        }
      });
    }
  
    // Initialize the job list
    filterJobs();
  
    // Update job list when category changes
    categoryFilter.on('change', filterJobs);
  });
  