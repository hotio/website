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
<tr><td><div id="tag22038" onclick="CopyToClipboard('tag22038');return false;" class="tag-decoration">nightly</div><div id="tag20905" onclick="CopyToClipboard('tag20905');return false;" class="tag-decoration">nightly-8f5f297</div><div id="tag23646" onclick="CopyToClipboard('tag23646');return false;" class="tag-decoration">nightly-1.6.2-beta.0</div><div id="tag20114" onclick="CopyToClipboard('tag20114');return false;" class="tag-decoration">nightly-v1</div><div id="tag8064" onclick="CopyToClipboard('tag8064');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag22741" onclick="CopyToClipboard('tag22741');return false;" class="tag-decoration">nightly-v1.6.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/8f5f2971e28abb96dc6b26a799b27854c49bb15e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/35225327352" target="_blank">2026-09-17 13:09:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30084" onclick="CopyToClipboard('tag30084');return false;" class="tag-decoration">release</div><div id="tag10791" onclick="CopyToClipboard('tag10791');return false;" class="tag-decoration">release-293fb8d</div><div id="tag7019" onclick="CopyToClipboard('tag7019');return false;" class="tag-decoration">release-1.6.1</div><div id="tag11826" onclick="CopyToClipboard('tag11826');return false;" class="tag-decoration">release-v1</div><div id="tag22738" onclick="CopyToClipboard('tag22738');return false;" class="tag-decoration">release-v1.6</div><div id="tag8651" onclick="CopyToClipboard('tag8651');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/293fb8d329968a63bb1a06bd062694d56149ae5f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34941491936" target="_blank">2026-09-15 07:23:46</a></td></tr>
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
