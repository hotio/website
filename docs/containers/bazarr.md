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
<tr><td><div id="tag9987" onclick="CopyToClipboard('tag9987');return false;" class="tag-decoration">nightly</div><div id="tag18839" onclick="CopyToClipboard('tag18839');return false;" class="tag-decoration">nightly-0cbbd84</div><div id="tag13724" onclick="CopyToClipboard('tag13724');return false;" class="tag-decoration">nightly-1.6.1-beta.42</div><div id="tag12495" onclick="CopyToClipboard('tag12495');return false;" class="tag-decoration">nightly-v1</div><div id="tag30385" onclick="CopyToClipboard('tag30385');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag25300" onclick="CopyToClipboard('tag25300');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/0cbbd8455ec75af72421ee85f192f8e838086178" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34843429810" target="_blank">2026-09-14 12:26:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25627" onclick="CopyToClipboard('tag25627');return false;" class="tag-decoration">release</div><div id="tag13821" onclick="CopyToClipboard('tag13821');return false;" class="tag-decoration">release-135eca3</div><div id="tag18523" onclick="CopyToClipboard('tag18523');return false;" class="tag-decoration">release-1.6.1</div><div id="tag21238" onclick="CopyToClipboard('tag21238');return false;" class="tag-decoration">release-v1</div><div id="tag3105" onclick="CopyToClipboard('tag3105');return false;" class="tag-decoration">release-v1.6</div><div id="tag17949" onclick="CopyToClipboard('tag17949');return false;" class="tag-decoration">release-v1.6.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/135eca34efc73566ee34ac000aefe06cf644523a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/34916547214" target="_blank">2026-09-15 01:15:29</a></td></tr>
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
