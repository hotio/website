---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25881" onclick="CopyToClipboard('tag25881');return false;" class="tag-decoration">nightly</div><div id="tag26168" onclick="CopyToClipboard('tag26168');return false;" class="tag-decoration">nightly-cf61972</div><div id="tag3211" onclick="CopyToClipboard('tag3211');return false;" class="tag-decoration">nightly-2.6.5.5672</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/cf61972180816ad62ca6818d99d2a0fb8c3ee1b2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40075268343" target="_blank">2026-10-24 07:43:31</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag616" onclick="CopyToClipboard('tag616');return false;" class="tag-decoration">release</div><div id="tag21081" onclick="CopyToClipboard('tag21081');return false;" class="tag-decoration">release-125d384</div><div id="tag14884" onclick="CopyToClipboard('tag14884');return false;" class="tag-decoration">release-2.6.5.5623</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/125d384b05df4ecfd53a1251ad1eda1221979022" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40075264716" target="_blank">2026-10-24 07:43:27</a></td></tr>
<tr><td><div id="tag21138" onclick="CopyToClipboard('tag21138');return false;" class="tag-decoration">testing</div><div id="tag28802" onclick="CopyToClipboard('tag28802');return false;" class="tag-decoration">testing-cc523ff</div><div id="tag3076" onclick="CopyToClipboard('tag3076');return false;" class="tag-decoration">testing-2.6.5.5623</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/cc523ff91f84e4716ed3bbecf66f0e312609f7b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40075276477" target="_blank">2026-10-24 07:43:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
