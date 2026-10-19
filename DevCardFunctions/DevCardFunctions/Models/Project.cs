

namespace DevCardFunctions.Models
{
    public class Project
    {
        public int Id { get; set; }

        public int Order { get; set; }

        public string? Title { get; set; }

        public string? Description { get; set; }

        public string? Link { get; set; }

        public string? LinkVideo { get; set; }

        public string? Image { get; set; }

        public List<string> Tech { get; set; } = [];


    }
}
