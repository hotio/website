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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12356" onclick="CopyToClipboard('tag12356');return false;" class="tag-decoration">release</div><div id="tag7680" onclick="CopyToClipboard('tag7680');return false;" class="tag-decoration">release-b187a5e</div><div id="tag16069" onclick="CopyToClipboard('tag16069');return false;" class="tag-decoration">release-8.8.2</div><div id="tag16942" onclick="CopyToClipboard('tag16942');return false;" class="tag-decoration">release-v8</div><div id="tag16462" onclick="CopyToClipboard('tag16462');return false;" class="tag-decoration">release-v8.8</div><div id="tag3712" onclick="CopyToClipboard('tag3712');return false;" class="tag-decoration">release-v8.8.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b187a5ebe0b82baf7ceb46ce00dedaf2923181d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27065939222" target="_blank">2026-06-06 15:13:45</a></td></tr>
<tr><td><div id="tag8047" onclick="CopyToClipboard('tag8047');return false;" class="tag-decoration">testing</div><div id="tag203" onclick="CopyToClipboard('tag203');return false;" class="tag-decoration">testing-9259821</div><div id="tag14622" onclick="CopyToClipboard('tag14622');return false;" class="tag-decoration">testing-8.8.3</div><div id="tag2100" onclick="CopyToClipboard('tag2100');return false;" class="tag-decoration">testing-v8</div><div id="tag320" onclick="CopyToClipboard('tag320');return false;" class="tag-decoration">testing-v8.8</div><div id="tag16312" onclick="CopyToClipboard('tag16312');return false;" class="tag-decoration">testing-v8.8.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9259821d1cecb650534267351436ba0260d1927a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27103481442" target="_blank">2026-06-07 20:10:29</a></td></tr>
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
