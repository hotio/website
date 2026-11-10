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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3599" onclick="CopyToClipboard('tag3599');return false;" class="tag-decoration">release</div><div id="tag12471" onclick="CopyToClipboard('tag12471');return false;" class="tag-decoration">release-dc5f269</div><div id="tag7861" onclick="CopyToClipboard('tag7861');return false;" class="tag-decoration">release-9.3.0</div><div id="tag5982" onclick="CopyToClipboard('tag5982');return false;" class="tag-decoration">release-v9</div><div id="tag11748" onclick="CopyToClipboard('tag11748');return false;" class="tag-decoration">release-v9.3</div><div id="tag7818" onclick="CopyToClipboard('tag7818');return false;" class="tag-decoration">release-v9.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/dc5f269d6db30f7a1a6926237af8f1e7d0071f24" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/42789159084" target="_blank">2026-11-10 09:15:17</a></td></tr>
<tr><td><div id="tag3098" onclick="CopyToClipboard('tag3098');return false;" class="tag-decoration">testing</div><div id="tag12620" onclick="CopyToClipboard('tag12620');return false;" class="tag-decoration">testing-01b3d4f</div><div id="tag30276" onclick="CopyToClipboard('tag30276');return false;" class="tag-decoration">testing-9.3.0</div><div id="tag19640" onclick="CopyToClipboard('tag19640');return false;" class="tag-decoration">testing-v9</div><div id="tag18098" onclick="CopyToClipboard('tag18098');return false;" class="tag-decoration">testing-v9.3</div><div id="tag1402" onclick="CopyToClipboard('tag1402');return false;" class="tag-decoration">testing-v9.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/01b3d4f69bd9684cf495b902714efd46f19786bf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/42789142423" target="_blank">2026-11-10 09:15:09</a></td></tr>
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
