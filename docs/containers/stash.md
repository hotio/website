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
<tr><td><div id="tag429" onclick="CopyToClipboard('tag429');return false;" class="tag-decoration">nightly</div><div id="tag9526" onclick="CopyToClipboard('tag9526');return false;" class="tag-decoration">nightly-60dc676</div><div id="tag3087" onclick="CopyToClipboard('tag3087');return false;" class="tag-decoration">nightly-ebe326a25e0f0653e83e3d613af34447e232cbfe</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/60dc6767d99c511f4f21ca8319009c1220588502" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/34195598887" target="_blank">2026-09-08 06:39:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19381" onclick="CopyToClipboard('tag19381');return false;" class="tag-decoration">release</div><div id="tag9462" onclick="CopyToClipboard('tag9462');return false;" class="tag-decoration">release-2cda345</div><div id="tag31576" onclick="CopyToClipboard('tag31576');return false;" class="tag-decoration">release-0.31.1</div><div id="tag9124" onclick="CopyToClipboard('tag9124');return false;" class="tag-decoration">release-v0</div><div id="tag30878" onclick="CopyToClipboard('tag30878');return false;" class="tag-decoration">release-v0.31</div><div id="tag18962" onclick="CopyToClipboard('tag18962');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/2cda345f8155aaad160d3783e03124beb1f66a09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/33793542478" target="_blank">2026-09-03 18:57:02</a></td></tr>
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
