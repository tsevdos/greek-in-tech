import { all, random, getEntry } from "../index";

describe("Greek in Tech", () => {
  describe("all", () => {
    it("must be an array with length more than zero", () => {
      expect(Array.isArray(all)).toBe(true);
      expect(all.length).toBe(66);
    });

    it('must includes the "Daemon" entry', () => {
      const entry = all[1];
      expect(all).toContain(entry);
    });
  });

  describe("random", () => {
    it("must return a random entry from the list", () => {
      const entry = random();
      expect(all).toContain(entry);
    });
  });

  describe("getEntry", () => {
    it("the entry must be an object with correct properties", () => {
      const entry = getEntry(2);
      expect(typeof entry).toBe("object");
      expect(entry).toHaveProperty("id");
      expect(entry).toHaveProperty("title");
      expect(entry).toHaveProperty("description");
      expect(entry).toHaveProperty("categories");
      expect(entry).toHaveProperty("references");
      expect(Array.isArray(entry.references)).toBe(true);
    });

    it("must return a specific entry", () => {
      const entry = getEntry(1);
      expect(entry.id).toBe(1);
      expect(entry.title).toBe("Cron (job scheduler)");
      const description = [
        "It comes from the Greek word for time, chronos (χρόνος).",
        "Chronos is the personification of time in early Greek mythology and literature.",
        "He later appears in the Renaissance as Father Time.",
      ];
      expect(entry.description).toBe(description.join(" "));
      expect(entry.categories).toEqual(["OS", "unix", "linux", "open source"]);
      expect(entry.references[0].name).toBe("Wikipedia");
      expect(entry.references[0].source).toBe("https://en.wikipedia.org/wiki/Cron");
    });

    it("must throw an error if entry doesnt exists", () => {
      expect(() => getEntry(10001)).toThrow("Invalid ID");
    });
  });
});
