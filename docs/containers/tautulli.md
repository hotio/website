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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28736" onclick="CopyToClipboard('tag28736');return false;" class="tag-decoration">release</div><div id="tag4910" onclick="CopyToClipboard('tag4910');return false;" class="tag-decoration">release-74adedb</div><div id="tag12195" onclick="CopyToClipboard('tag12195');return false;" class="tag-decoration">release-2.16.1</div><div id="tag18092" onclick="CopyToClipboard('tag18092');return false;" class="tag-decoration">release-v2</div><div id="tag29579" onclick="CopyToClipboard('tag29579');return false;" class="tag-decoration">release-v2.16</div><div id="tag26818" onclick="CopyToClipboard('tag26818');return false;" class="tag-decoration">release-v2.16.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/74adedbfc04e7ae5356dba9cb62eebbb319485f8" target="_blank">Upstream update: alpinevpn-e5bbee4 => alpinevpn-9abb66b</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/22292141710" target="_blank">2026-02-23 03:44:36</a></td></tr>
<tr><td><div id="tag21954" onclick="CopyToClipboard('tag21954');return false;" class="tag-decoration">testing</div><div id="tag10041" onclick="CopyToClipboard('tag10041');return false;" class="tag-decoration">testing-4b5f13a</div><div id="tag1495" onclick="CopyToClipboard('tag1495');return false;" class="tag-decoration">testing-2.16.1</div><div id="tag3331" onclick="CopyToClipboard('tag3331');return false;" class="tag-decoration">testing-v2</div><div id="tag15651" onclick="CopyToClipboard('tag15651');return false;" class="tag-decoration">testing-v2.16</div><div id="tag28016" onclick="CopyToClipboard('tag28016');return false;" class="tag-decoration">testing-v2.16.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/4b5f13a61b8ffd9f8035366a64e8cca4d5decd07" target="_blank">Version update: 2.16.0 => 2.16.1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/22042995611" target="_blank">2026-02-15 21:01:39</a></td></tr>
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
