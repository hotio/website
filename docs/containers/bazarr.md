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
<tr><td><div id="tag21956" onclick="CopyToClipboard('tag21956');return false;" class="tag-decoration">nightly</div><div id="tag8609" onclick="CopyToClipboard('tag8609');return false;" class="tag-decoration">nightly-489adc1</div><div id="tag25508" onclick="CopyToClipboard('tag25508');return false;" class="tag-decoration">nightly-1.5.7-beta.67</div><div id="tag5572" onclick="CopyToClipboard('tag5572');return false;" class="tag-decoration">nightly-v1</div><div id="tag16134" onclick="CopyToClipboard('tag16134');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag6516" onclick="CopyToClipboard('tag6516');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/489adc104c7e56f84523f9048d3399077bbdd931" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28509029933" target="_blank">2026-07-01 09:52:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4266" onclick="CopyToClipboard('tag4266');return false;" class="tag-decoration">release</div><div id="tag3660" onclick="CopyToClipboard('tag3660');return false;" class="tag-decoration">release-3251618</div><div id="tag4597" onclick="CopyToClipboard('tag4597');return false;" class="tag-decoration">release-1.5.6</div><div id="tag23100" onclick="CopyToClipboard('tag23100');return false;" class="tag-decoration">release-v1</div><div id="tag20132" onclick="CopyToClipboard('tag20132');return false;" class="tag-decoration">release-v1.5</div><div id="tag4671" onclick="CopyToClipboard('tag4671');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/3251618dfc47d49a274717ee5f6d89d4c4d5b103" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28443302410" target="_blank">2026-06-30 12:11:31</a></td></tr>
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
