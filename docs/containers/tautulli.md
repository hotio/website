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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31630" onclick="CopyToClipboard('tag31630');return false;" class="tag-decoration">release</div><div id="tag9850" onclick="CopyToClipboard('tag9850');return false;" class="tag-decoration">release-7fd8979</div><div id="tag19164" onclick="CopyToClipboard('tag19164');return false;" class="tag-decoration">release-2.18.1</div><div id="tag30193" onclick="CopyToClipboard('tag30193');return false;" class="tag-decoration">release-v2</div><div id="tag29237" onclick="CopyToClipboard('tag29237');return false;" class="tag-decoration">release-v2.18</div><div id="tag31506" onclick="CopyToClipboard('tag31506');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7fd897985118c70e053be86ac51ad52312b1193f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35381558844" target="_blank">2026-09-18 18:40:30</a></td></tr>
<tr><td><div id="tag2949" onclick="CopyToClipboard('tag2949');return false;" class="tag-decoration">testing</div><div id="tag9036" onclick="CopyToClipboard('tag9036');return false;" class="tag-decoration">testing-a9d96f5</div><div id="tag11200" onclick="CopyToClipboard('tag11200');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag32653" onclick="CopyToClipboard('tag32653');return false;" class="tag-decoration">testing-v2</div><div id="tag25654" onclick="CopyToClipboard('tag25654');return false;" class="tag-decoration">testing-v2.18</div><div id="tag9037" onclick="CopyToClipboard('tag9037');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a9d96f5a9b83f9bf10341c7dba03082dc6b93b98" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35381547774" target="_blank">2026-09-18 18:40:21</a></td></tr>
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
