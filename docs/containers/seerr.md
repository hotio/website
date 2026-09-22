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
<tr><td><div id="tag9209" onclick="CopyToClipboard('tag9209');return false;" class="tag-decoration">nightly</div><div id="tag13348" onclick="CopyToClipboard('tag13348');return false;" class="tag-decoration">nightly-b023266</div><div id="tag24294" onclick="CopyToClipboard('tag24294');return false;" class="tag-decoration">nightly-794743a45f17e3d6aba06d68e1716e8b15146673</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/b023266712cccb360b85051691af63a21feb13b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35712017655" target="_blank">2026-09-22 09:43:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21342" onclick="CopyToClipboard('tag21342');return false;" class="tag-decoration">release</div><div id="tag14861" onclick="CopyToClipboard('tag14861');return false;" class="tag-decoration">release-5a0ef29</div><div id="tag21873" onclick="CopyToClipboard('tag21873');return false;" class="tag-decoration">release-3.4.1</div><div id="tag21185" onclick="CopyToClipboard('tag21185');return false;" class="tag-decoration">release-v3</div><div id="tag4700" onclick="CopyToClipboard('tag4700');return false;" class="tag-decoration">release-v3.4</div><div id="tag28597" onclick="CopyToClipboard('tag28597');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/5a0ef29789b8fcab41fd9b406cb54a6fbdfbf988" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/35712031635" target="_blank">2026-09-22 09:43:47</a></td></tr>
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
