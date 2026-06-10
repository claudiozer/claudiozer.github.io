from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"

ASSET_RULES = {
    "avatar.png": {"crop": (8, 8, 76, 76), "scale": 6},
    "hero.png": {"crop": (28, 0, 350, 500), "scale": 4},
    "profile-kid.png": {"crop": (8, 0, 182, 180), "scale": 4},
    "motivation.png": {"crop": (5, 0, 160, 215), "scale": 4},
    "camera-kid.png": {"crop": (28, 20, 168, 190), "scale": 5},
    "photo.png": {"crop": (5, 0, 160, 185), "scale": 4},
    "music.png": {"crop": (5, 0, 160, 185), "scale": 4},
    "crossfit.png": {"crop": (50, 0, 180, 185), "scale": 5},
    "travel.png": {"crop": (8, 0, 212, 145), "scale": 4},
}


def process(source: Path, crop: tuple[int, int, int, int], scale: int) -> None:
    image = Image.open(source).convert("RGBA").crop(crop)
    target_size = (image.width * scale, image.height * scale)
    image = image.resize(target_size, Image.Resampling.LANCZOS)
    image = ImageEnhance.Contrast(image).enhance(1.03)
    image = ImageEnhance.Sharpness(image).enhance(1.18)
    image = image.filter(ImageFilter.UnsharpMask(radius=1.2, percent=65, threshold=3))

    destination = source.with_name(f"{source.stem}-retina.webp")
    image.save(destination, "WEBP", quality=94, method=6)
    print(f"{source.name} -> {destination.name} {image.width}x{image.height}")


def main() -> None:
    for filename, rule in ASSET_RULES.items():
        process(ASSETS / filename, rule["crop"], rule["scale"])


if __name__ == "__main__":
    main()
