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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10754" onclick="CopyToClipboard('tag10754');return false;" class="tag-decoration">release</div><div id="tag31688" onclick="CopyToClipboard('tag31688');return false;" class="tag-decoration">release-3477e69</div><div id="tag7837" onclick="CopyToClipboard('tag7837');return false;" class="tag-decoration">release-8.5.4</div><div id="tag3763" onclick="CopyToClipboard('tag3763');return false;" class="tag-decoration">release-v8</div><div id="tag28503" onclick="CopyToClipboard('tag28503');return false;" class="tag-decoration">release-v8.5</div><div id="tag28569" onclick="CopyToClipboard('tag28569');return false;" class="tag-decoration">release-v8.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/3477e6995366a874687f97cad196df494201b345" target="_blank">Upstream update: noblevpn-cba64e8 => noblevpn-441eaee</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24483895068" target="_blank">2026-04-15 23:36:18</a></td></tr>
<tr><td><div id="tag10145" onclick="CopyToClipboard('tag10145');return false;" class="tag-decoration">testing</div><div id="tag10542" onclick="CopyToClipboard('tag10542');return false;" class="tag-decoration">testing-55e0b72</div><div id="tag28672" onclick="CopyToClipboard('tag28672');return false;" class="tag-decoration">testing-8.5.4</div><div id="tag20599" onclick="CopyToClipboard('tag20599');return false;" class="tag-decoration">testing-v8</div><div id="tag10502" onclick="CopyToClipboard('tag10502');return false;" class="tag-decoration">testing-v8.5</div><div id="tag12136" onclick="CopyToClipboard('tag12136');return false;" class="tag-decoration">testing-v8.5.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/55e0b72fad9a70024f3b728bf9ea1ea45facc020" target="_blank">Upstream update: noblevpn-cba64e8 => noblevpn-441eaee</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24483895684" target="_blank">2026-04-15 23:36:20</a></td></tr>
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
