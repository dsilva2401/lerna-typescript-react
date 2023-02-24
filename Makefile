init:
	@yarn
	@git submodule update --init --recursive
	@npx lerna bootstrap -- --force

bootstrap:
	@npx lerna bootstrap -- --force

add-repo:
	@if [ -z "$(url)" ]; then echo "url is not set"; exit 1; fi
	@if [ -z "$(dir-name)" ]; then echo "dir-name is not set"; exit 1; fi
	git submodule add $(url) packages/$(dir-name)
	git submodule update --init --recursive
	npx lerna bootstrap -- --force

remove-repo:
	@echo "Follow these steps to remove a submodule:\n"
	@echo "Delete the relevant line from the .gitmodules file."
	@echo "Delete the relevant section from .git/config."
	@echo "Run git rm --cached path_to_submodule (no trailing slash)."
	@echo "Run rm -rf .git/modules/path_to_submodule (no trailing slash)."
	@echo "Commit and delete the now untracked submodule files."

sync-env-vars:
	@node scripts/update-env-vars.js

start:
	@npx lerna run start