---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29456" onclick="CopyToClipboard('tag29456');return false;" class="tag-decoration">release</div><div id="tag9830" onclick="CopyToClipboard('tag9830');return false;" class="tag-decoration">release-142c2bc</div><div id="tag31423" onclick="CopyToClipboard('tag31423');return false;" class="tag-decoration">release-8.8.1</div><div id="tag12886" onclick="CopyToClipboard('tag12886');return false;" class="tag-decoration">release-v8</div><div id="tag14551" onclick="CopyToClipboard('tag14551');return false;" class="tag-decoration">release-v8.8</div><div id="tag24783" onclick="CopyToClipboard('tag24783');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/142c2bc1162e6126a1380fdca98914fbd14cee02" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25986601970" target="_blank">2026-05-17 09:03:44</a></td></tr>
<tr><td><div id="tag30564" onclick="CopyToClipboard('tag30564');return false;" class="tag-decoration">testing</div><div id="tag5006" onclick="CopyToClipboard('tag5006');return false;" class="tag-decoration">testing-bf09ac4</div><div id="tag22832" onclick="CopyToClipboard('tag22832');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag24746" onclick="CopyToClipboard('tag24746');return false;" class="tag-decoration">testing-v8</div><div id="tag68" onclick="CopyToClipboard('tag68');return false;" class="tag-decoration">testing-v8.8</div><div id="tag2605" onclick="CopyToClipboard('tag2605');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/bf09ac48d251b9ca824f2897dc0eb9d18977b278" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25986602142" target="_blank">2026-05-17 09:03:44</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
