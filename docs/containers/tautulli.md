---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18508" onclick="CopyToClipboard('tag18508');return false;" class="tag-decoration">release</div><div id="tag18855" onclick="CopyToClipboard('tag18855');return false;" class="tag-decoration">release-ec88d52</div><div id="tag19393" onclick="CopyToClipboard('tag19393');return false;" class="tag-decoration">release-2.17.1</div><div id="tag17250" onclick="CopyToClipboard('tag17250');return false;" class="tag-decoration">release-v2</div><div id="tag5116" onclick="CopyToClipboard('tag5116');return false;" class="tag-decoration">release-v2.17</div><div id="tag28806" onclick="CopyToClipboard('tag28806');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ec88d52bcf7b549f604507a2ff661ecff86cab21" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25707035993" target="_blank">2026-05-12 01:11:07</a></td></tr>
<tr><td><div id="tag31635" onclick="CopyToClipboard('tag31635');return false;" class="tag-decoration">testing</div><div id="tag32714" onclick="CopyToClipboard('tag32714');return false;" class="tag-decoration">testing-ab9ccb5</div><div id="tag25201" onclick="CopyToClipboard('tag25201');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag28247" onclick="CopyToClipboard('tag28247');return false;" class="tag-decoration">testing-v2</div><div id="tag19448" onclick="CopyToClipboard('tag19448');return false;" class="tag-decoration">testing-v2.17</div><div id="tag3144" onclick="CopyToClipboard('tag3144');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/ab9ccb5094dfae02ae78fd1aa77156489f5b14e7" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25700670292" target="_blank">2026-05-11 22:19:30</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
