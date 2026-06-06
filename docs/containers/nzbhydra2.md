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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1532" onclick="CopyToClipboard('tag1532');return false;" class="tag-decoration">release</div><div id="tag20041" onclick="CopyToClipboard('tag20041');return false;" class="tag-decoration">release-b187a5e</div><div id="tag16699" onclick="CopyToClipboard('tag16699');return false;" class="tag-decoration">release-8.8.2</div><div id="tag22870" onclick="CopyToClipboard('tag22870');return false;" class="tag-decoration">release-v8</div><div id="tag5385" onclick="CopyToClipboard('tag5385');return false;" class="tag-decoration">release-v8.8</div><div id="tag20718" onclick="CopyToClipboard('tag20718');return false;" class="tag-decoration">release-v8.8.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b187a5ebe0b82baf7ceb46ce00dedaf2923181d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27065939222" target="_blank">2026-06-06 15:13:45</a></td></tr>
<tr><td><div id="tag22154" onclick="CopyToClipboard('tag22154');return false;" class="tag-decoration">testing</div><div id="tag10708" onclick="CopyToClipboard('tag10708');return false;" class="tag-decoration">testing-6095a96</div><div id="tag20804" onclick="CopyToClipboard('tag20804');return false;" class="tag-decoration">testing-8.8.2</div><div id="tag7335" onclick="CopyToClipboard('tag7335');return false;" class="tag-decoration">testing-v8</div><div id="tag27634" onclick="CopyToClipboard('tag27634');return false;" class="tag-decoration">testing-v8.8</div><div id="tag21310" onclick="CopyToClipboard('tag21310');return false;" class="tag-decoration">testing-v8.8.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/6095a96876d7906fe733003dc0286684b4676b35" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27065939950" target="_blank">2026-06-06 15:13:47</a></td></tr>
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
