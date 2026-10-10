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
<tr><td><div id="tag6992" onclick="CopyToClipboard('tag6992');return false;" class="tag-decoration">nightly</div><div id="tag22083" onclick="CopyToClipboard('tag22083');return false;" class="tag-decoration">nightly-fa2ea34</div><div id="tag16409" onclick="CopyToClipboard('tag16409');return false;" class="tag-decoration">nightly-8f2eceeaa5e7246bea42008ff936bd05ad948f90</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/fa2ea34a1bd36fb2a0786dc849ff74c92cb9014e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/38009844060" target="_blank">2026-10-10 00:37:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28586" onclick="CopyToClipboard('tag28586');return false;" class="tag-decoration">release</div><div id="tag22398" onclick="CopyToClipboard('tag22398');return false;" class="tag-decoration">release-a68cfd5</div><div id="tag265" onclick="CopyToClipboard('tag265');return false;" class="tag-decoration">release-3.5.0</div><div id="tag6692" onclick="CopyToClipboard('tag6692');return false;" class="tag-decoration">release-v3</div><div id="tag13237" onclick="CopyToClipboard('tag13237');return false;" class="tag-decoration">release-v3.5</div><div id="tag8860" onclick="CopyToClipboard('tag8860');return false;" class="tag-decoration">release-v3.5.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/a68cfd5e90db65c0c3b3725fb8ea5947fb711764" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/37556407533" target="_blank">2026-10-07 01:18:08</a></td></tr>
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
