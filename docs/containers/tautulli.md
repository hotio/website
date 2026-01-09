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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8014" onclick="CopyToClipboard('tag8014');return false;" class="tag-decoration">release</div><div id="tag20699" onclick="CopyToClipboard('tag20699');return false;" class="tag-decoration">release-2.16.0</div><div id="tag8848" onclick="CopyToClipboard('tag8848');return false;" class="tag-decoration">release-da6239e</div><div id="tag13620" onclick="CopyToClipboard('tag13620');return false;" class="tag-decoration">release-v2</div><div id="tag16420" onclick="CopyToClipboard('tag16420');return false;" class="tag-decoration">release-v2.16</div><div id="tag4593" onclick="CopyToClipboard('tag4593');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/da6239e72c9cca4cacb57b2f8473d4849974ee9a" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20845771444" target="_blank">2026-01-09 08:22:46</a></td></tr>
<tr><td><div id="tag8471" onclick="CopyToClipboard('tag8471');return false;" class="tag-decoration">testing</div><div id="tag22484" onclick="CopyToClipboard('tag22484');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag2387" onclick="CopyToClipboard('tag2387');return false;" class="tag-decoration">testing-8f5dc9a</div><div id="tag24512" onclick="CopyToClipboard('tag24512');return false;" class="tag-decoration">testing-v2</div><div id="tag9049" onclick="CopyToClipboard('tag9049');return false;" class="tag-decoration">testing-v2.16</div><div id="tag23684" onclick="CopyToClipboard('tag23684');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/8f5dc9a7bbb49e62b411f9fb48a8870e1bc59c8f" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20845771611" target="_blank">2026-01-09 08:22:47</a></td></tr>
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
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

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
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
