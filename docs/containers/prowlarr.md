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
<tr><td><div id="tag25375" onclick="CopyToClipboard('tag25375');return false;" class="tag-decoration">nightly</div><div id="tag28524" onclick="CopyToClipboard('tag28524');return false;" class="tag-decoration">nightly-ff050ac</div><div id="tag18735" onclick="CopyToClipboard('tag18735');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ff050ac8c9ae55dda32e31c18b393d946cdaf7b6" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25706849799" target="_blank">2026-05-12 01:05:53</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6066" onclick="CopyToClipboard('tag6066');return false;" class="tag-decoration">release</div><div id="tag12617" onclick="CopyToClipboard('tag12617');return false;" class="tag-decoration">release-f625d40</div><div id="tag24871" onclick="CopyToClipboard('tag24871');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/f625d40c69522c110bce98a03de693a3f703b56c" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25706855812" target="_blank">2026-05-12 01:06:03</a></td></tr>
<tr><td><div id="tag2823" onclick="CopyToClipboard('tag2823');return false;" class="tag-decoration">testing</div><div id="tag24554" onclick="CopyToClipboard('tag24554');return false;" class="tag-decoration">testing-161b425</div><div id="tag22821" onclick="CopyToClipboard('tag22821');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/161b425b2b32bf2586c6955a0aa6514697771673" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25701857111" target="_blank">2026-05-11 22:47:40</a></td></tr>
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
