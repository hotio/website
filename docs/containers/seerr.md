---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag18278" onclick="CopyToClipboard('tag18278');return false;" class="tag-decoration">nightly</div><div id="tag25974" onclick="CopyToClipboard('tag25974');return false;" class="tag-decoration">nightly-bfd2773</div><div id="tag24256" onclick="CopyToClipboard('tag24256');return false;" class="tag-decoration">nightly-a4f5eaa21e30736648600e115ecc87e27a5f6666</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/bfd277369f6810f12de3b8fa09a9c07ce23ae14a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33916824477" target="_blank">2026-09-04 20:33:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2825" onclick="CopyToClipboard('tag2825');return false;" class="tag-decoration">release</div><div id="tag15311" onclick="CopyToClipboard('tag15311');return false;" class="tag-decoration">release-3b2c475</div><div id="tag4439" onclick="CopyToClipboard('tag4439');return false;" class="tag-decoration">release-3.4.1</div><div id="tag6183" onclick="CopyToClipboard('tag6183');return false;" class="tag-decoration">release-v3</div><div id="tag30632" onclick="CopyToClipboard('tag30632');return false;" class="tag-decoration">release-v3.4</div><div id="tag5539" onclick="CopyToClipboard('tag5539');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3b2c47587d0638d2c4e6199ef0b103303c90591e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33916821183" target="_blank">2026-09-04 20:33:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
