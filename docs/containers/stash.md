---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag7795" onclick="CopyToClipboard('tag7795');return false;" class="tag-decoration">nightly</div><div id="tag11266" onclick="CopyToClipboard('tag11266');return false;" class="tag-decoration">nightly-a36b705</div><div id="tag28235" onclick="CopyToClipboard('tag28235');return false;" class="tag-decoration">nightly-0821d2c02bfce9b0cf51f66678506c8a10c8849a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/a36b705e3919cc61ac3eb59d82e883f3b059c6f6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29910989343" target="_blank">2026-07-22 10:11:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1481" onclick="CopyToClipboard('tag1481');return false;" class="tag-decoration">release</div><div id="tag24773" onclick="CopyToClipboard('tag24773');return false;" class="tag-decoration">release-05c2875</div><div id="tag8770" onclick="CopyToClipboard('tag8770');return false;" class="tag-decoration">release-0.31.1</div><div id="tag4390" onclick="CopyToClipboard('tag4390');return false;" class="tag-decoration">release-v0</div><div id="tag199" onclick="CopyToClipboard('tag199');return false;" class="tag-decoration">release-v0.31</div><div id="tag18614" onclick="CopyToClipboard('tag18614');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/05c28758259acbb1a01221add72f0b320d74cdd7" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29855839650" target="_blank">2026-07-21 18:06:56</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
