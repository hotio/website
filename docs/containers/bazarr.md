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
<tr><td><div id="tag31590" onclick="CopyToClipboard('tag31590');return false;" class="tag-decoration">nightly</div><div id="tag12112" onclick="CopyToClipboard('tag12112');return false;" class="tag-decoration">nightly-c175e7d</div><div id="tag17725" onclick="CopyToClipboard('tag17725');return false;" class="tag-decoration">nightly-1.6.1-beta.35</div><div id="tag13642" onclick="CopyToClipboard('tag13642');return false;" class="tag-decoration">nightly-v1</div><div id="tag725" onclick="CopyToClipboard('tag725');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag22707" onclick="CopyToClipboard('tag22707');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/c175e7db3901af22a67ed58641adf6f181d10bd0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33587369362" target="_blank">2026-09-02 03:31:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7468" onclick="CopyToClipboard('tag7468');return false;" class="tag-decoration">release</div><div id="tag19263" onclick="CopyToClipboard('tag19263');return false;" class="tag-decoration">release-aa57660</div><div id="tag12769" onclick="CopyToClipboard('tag12769');return false;" class="tag-decoration">release-1.6.0</div><div id="tag23028" onclick="CopyToClipboard('tag23028');return false;" class="tag-decoration">release-v1</div><div id="tag21681" onclick="CopyToClipboard('tag21681');return false;" class="tag-decoration">release-v1.6</div><div id="tag631" onclick="CopyToClipboard('tag631');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/aa5766041aa5f42788f3b3b4b2694781d256ba69" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33609283370" target="_blank">2026-09-02 08:32:44</a></td></tr>
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
