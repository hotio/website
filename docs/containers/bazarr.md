---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag31865" onclick="CopyToClipboard('tag31865');return false;" class="tag-decoration">nightly</div><div id="tag17343" onclick="CopyToClipboard('tag17343');return false;" class="tag-decoration">nightly-d66d5da</div><div id="tag19069" onclick="CopyToClipboard('tag19069');return false;" class="tag-decoration">nightly-1.5.7-beta.36</div><div id="tag24564" onclick="CopyToClipboard('tag24564');return false;" class="tag-decoration">nightly-v1</div><div id="tag1331" onclick="CopyToClipboard('tag1331');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag32379" onclick="CopyToClipboard('tag32379');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/d66d5da4ed47f4ef853ab4e5f54771fa8f1d8978" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25700212363" target="_blank">2026-05-11 22:08:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5402" onclick="CopyToClipboard('tag5402');return false;" class="tag-decoration">release</div><div id="tag28807" onclick="CopyToClipboard('tag28807');return false;" class="tag-decoration">release-2a94c38</div><div id="tag27506" onclick="CopyToClipboard('tag27506');return false;" class="tag-decoration">release-1.5.6</div><div id="tag20980" onclick="CopyToClipboard('tag20980');return false;" class="tag-decoration">release-v1</div><div id="tag2942" onclick="CopyToClipboard('tag2942');return false;" class="tag-decoration">release-v1.5</div><div id="tag28480" onclick="CopyToClipboard('tag28480');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/2a94c38699aa1b212f8cbca987329da9e2fa5e89" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/25700217759" target="_blank">2026-05-11 22:08:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
