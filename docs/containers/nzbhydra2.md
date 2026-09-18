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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24710" onclick="CopyToClipboard('tag24710');return false;" class="tag-decoration">release</div><div id="tag2978" onclick="CopyToClipboard('tag2978');return false;" class="tag-decoration">release-5a6b482</div><div id="tag18601" onclick="CopyToClipboard('tag18601');return false;" class="tag-decoration">release-9.0.1</div><div id="tag553" onclick="CopyToClipboard('tag553');return false;" class="tag-decoration">release-v9</div><div id="tag32235" onclick="CopyToClipboard('tag32235');return false;" class="tag-decoration">release-v9.0</div><div id="tag10250" onclick="CopyToClipboard('tag10250');return false;" class="tag-decoration">release-v9.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5a6b4827b4279e8464a31932b76cbb81469e3091" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35371382304" target="_blank">2026-09-18 16:56:07</a></td></tr>
<tr><td><div id="tag20628" onclick="CopyToClipboard('tag20628');return false;" class="tag-decoration">testing</div><div id="tag32036" onclick="CopyToClipboard('tag32036');return false;" class="tag-decoration">testing-9dc0a21</div><div id="tag13494" onclick="CopyToClipboard('tag13494');return false;" class="tag-decoration">testing-9.0.1</div><div id="tag17979" onclick="CopyToClipboard('tag17979');return false;" class="tag-decoration">testing-v9</div><div id="tag8667" onclick="CopyToClipboard('tag8667');return false;" class="tag-decoration">testing-v9.0</div><div id="tag19221" onclick="CopyToClipboard('tag19221');return false;" class="tag-decoration">testing-v9.0.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9dc0a21282f1c353090650b71443d46006d308d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35371382301" target="_blank">2026-09-18 16:56:07</a></td></tr>
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
